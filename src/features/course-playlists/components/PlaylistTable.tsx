import { Button } from "@/components/ui/button";

import PlaylistStatusBadge from "./PlaylistStatusBadge";

import type { CoursePlaylist } from "../types/course-playlist.types";

interface PlaylistTableProps {
  playlists: CoursePlaylist[];

  onEdit: (playlist: CoursePlaylist) => void;

  onToggleStatus: (
    playlist: CoursePlaylist
  ) => void;
}

export default function PlaylistTable({
  playlists,
  onEdit,
  onToggleStatus,
}: PlaylistTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 text-left">
              Order
            </th>

            <th className="p-4 text-left">
              Playlist
            </th>

            <th className="p-4 text-left">
              Vimeo URL
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {playlists.map((playlist) => (
            <tr
              key={playlist.id}
              className="border-t"
            >
              <td className="p-4">
                {playlist.order}
              </td>

              <td className="p-4">
                <div className="font-medium">
                  {playlist.title}
                </div>

                <div className="text-sm text-muted-foreground">
                  {playlist.description}
                </div>
              </td>

              <td className="max-w-sm truncate p-4">
                {playlist.vimeoUrl}
              </td>

              <td className="p-4">
                <PlaylistStatusBadge
                  status={playlist.status}
                />
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      onEdit(playlist)
                    }
                  >
                    Edit
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      onToggleStatus(
                        playlist
                      )
                    }
                  >
                    {playlist.status ===
                    "active"
                      ? "Deactivate"
                      : "Activate"}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}