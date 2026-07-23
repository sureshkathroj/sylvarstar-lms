import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import type {
  CoursePlaylist
} from "../types/course-playlist.types";

export interface PlaylistFormData {
  title: string;
  description: string;
  vimeoUrl: string;
  order: number;
}

interface PlaylistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  playlist?: CoursePlaylist | null;

  onSave: (
    data: PlaylistFormData
  ) => Promise<void>;
}

export default function PlaylistDialog({
  open,
  onOpenChange,
  playlist,
  onSave,
}: PlaylistDialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [vimeoUrl, setVimeoUrl] =
    useState("");

  const [order, setOrder] =
    useState(1);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    if (playlist) {
      setTitle(playlist.title);
      setDescription(
        playlist.description
      );
      setVimeoUrl(playlist.vimeoUrl);
      setOrder(playlist.order);
    } else {
      setTitle("");
      setDescription("");
      setVimeoUrl("");
      setOrder(1);
    }
  }, [playlist, open]);

  async function handleSave() {
  setSaving(true);

  try {
    await onSave({
      title,
      description,
      vimeoUrl,
      order,
    });
  } finally {
    setSaving(false);
  }
}

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {playlist
              ? "Edit Playlist"
              : "Add Playlist"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">

          <div>
            <Label>Playlist Title</Label>

            <Input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />
          </div>

          <div>
            <Label>Description</Label>

            <Input
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <Label>Vimeo Playlist URL</Label>

            <Input
              value={vimeoUrl}
              onChange={(e) =>
                setVimeoUrl(
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <Label>Display Order</Label>

            <Input
              type="number"
              value={order}
              onChange={(e) =>
                setOrder(
                  Number(e.target.value)
                )
              }
            />
          </div>

        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            disabled={saving}
            onClick={handleSave}
          >
            {saving
              ? "Saving..."
              : "Save Playlist"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}