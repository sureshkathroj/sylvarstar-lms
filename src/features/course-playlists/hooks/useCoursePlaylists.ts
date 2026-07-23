import { useCallback, useEffect, useState } from "react";

import { coursePlaylistService } from "../services/course-playlist.service";
import type { CoursePlaylist } from "../types/course-playlist.types";

export function useCoursePlaylists(
  courseId: string
) {
  const [playlists, setPlaylists] = useState<
    CoursePlaylist[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  const refresh = useCallback(async () => {
    if (!courseId) {
      setPlaylists([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const data =
        await coursePlaylistService.getPlaylists(
          courseId
        );

      setPlaylists(data);
    } finally {
      setLoading(false);
    }
  }, [courseId]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    playlists,
    loading,
    refresh,
  };
}