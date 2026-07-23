import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import PageHeader from "@/shared/components/layout/PageHeader";
import EmptyState from "@/shared/components/feedback/EmptyState";
import { Button } from "@/components/ui/button";

import PlaylistDialog from "../components/PlaylistDialog";
import PlaylistTable from "../components/PlaylistTable";
import { useCoursePlaylists } from "../hooks/useCoursePlaylists";
import { coursePlaylistService } from "../services/course-playlist.service";

import type { CoursePlaylist } from "../types/course-playlist.types";
import type { PlaylistFormData } from "../components/PlaylistDialog";

export default function CoursePlaylistsPage() {
  const { courseId = "" } = useParams();

  const { playlists, loading, refresh } =
    useCoursePlaylists(courseId);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [selectedPlaylist, setSelectedPlaylist] =
    useState<CoursePlaylist | null>(null);

  function handleAddPlaylist() {
    setSelectedPlaylist(null);
    setDialogOpen(true);
  }

 async function handleSave(
  data: PlaylistFormData
) {
  if (!courseId) return;

  try {
    if (selectedPlaylist) {
      await coursePlaylistService.updatePlaylist(
        selectedPlaylist.id,
        {
          title: data.title,
          description: data.description,
          vimeoUrl: data.vimeoUrl,
          order: data.order,
        }
      );

      toast.success(
        "Playlist updated successfully."
      );
    } else {
      await coursePlaylistService.createPlaylist({
        courseId,
        title: data.title,
        description: data.description,
        vimeoUrl: data.vimeoUrl,
        order: data.order,
      });

      toast.success(
        "Playlist created successfully."
      );
    }

    await refresh();

    setDialogOpen(false);
    setSelectedPlaylist(null);
  } catch (error) {
    console.error(error);

    toast.error("Failed to save playlist.");
  }
}

  function handleEdit(
    playlist: CoursePlaylist
  ) {
     console.log("Edit clicked:", playlist);
    setSelectedPlaylist(playlist);
    setDialogOpen(true);
  }

  async function handleToggleStatus(
  playlist: CoursePlaylist
) {
  try {
    const newStatus =
      playlist.status === "active"
        ? "inactive"
        : "active";

    await coursePlaylistService.updatePlaylistStatus(
      playlist.id,
      newStatus
    );

    toast.success(
      `Playlist ${
        newStatus === "active"
          ? "activated"
          : "deactivated"
      }.`
    );

    await refresh();
  } catch (error) {
    console.error(error);

    toast.error(
      "Failed to update playlist status."
    );
  }
}

  return (
    <div className="space-y-8">
      <PageHeader
        title="Course Playlists"
        description="Manage Vimeo playlists for this course."
        actions={
          <Button onClick={handleAddPlaylist}>
            Add Playlist
          </Button>
        }
      />

      {loading && (
        <p className="text-sm text-muted-foreground">
          Loading playlists...
        </p>
      )}

      {!loading &&
        playlists.length === 0 && (
          <EmptyState
            title="No Playlists"
            description="Create your first playlist for this course."
          />
        )}

      {!loading &&
        playlists.length > 0 && (
          <PlaylistTable
            playlists={playlists}
            onEdit={handleEdit}
            onToggleStatus={handleToggleStatus}
          />
        )}

          <PlaylistDialog
              open={dialogOpen}
              onOpenChange={(open) => {
                  setDialogOpen(open);

                  if (!open) {
                      setSelectedPlaylist(null);
                  }
              }}
              playlist={selectedPlaylist}
              onSave={handleSave}
          />
    </div>
  );
}