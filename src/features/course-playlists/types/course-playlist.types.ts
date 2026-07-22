export const PLAYLIST_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

export type PlaylistStatus =
  (typeof PLAYLIST_STATUS)[keyof typeof PLAYLIST_STATUS];

export interface CoursePlaylist {
  id: string;

  courseId: string;

  title: string;

  description: string;

  vimeoUrl: string;

  order: number;

  status: PlaylistStatus;

  createdAt: Date;

  updatedAt: Date;
}

export interface CreateCoursePlaylistInput {
  courseId: string;

  title: string;

  description: string;

  vimeoUrl: string;

  order: number;
}

export interface UpdateCoursePlaylistInput {
  title: string;

  description: string;

  vimeoUrl: string;

  order: number;
}