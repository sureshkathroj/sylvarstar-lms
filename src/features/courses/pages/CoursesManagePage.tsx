import { useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import EmptyState from "@/shared/components/feedback/EmptyState";
import PageHeader from "@/shared/components/layout/PageHeader";

import CourseDialog from "../components/CourseDialog";
import CourseSearch from "../components/CourseSearch";
import CourseTable from "../components/CourseTable";
import { useCourses } from "../hooks/useCourses";
import { courseService } from "../services/course.service";
import type { Course } from "../types/course.types";

export default function CoursesManagePage() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course>();

  const { courses, loading, refresh } = useCourses();

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return courses;

    return courses.filter(
      (course) =>
        course.name.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query)
    );
  }, [courses, search]);

  const handleCreate = () => {
    setSelectedCourse(undefined);
    setOpen(true);
  };

  const handleEdit = (course: Course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleManagePlaylists = (course: Course) => {
    console.log("Manage Playlists:", course);

    toast.info(
      `Playlist management for "${course.name}" will be implemented next.`
    );
  };

  const handleToggleStatus = async (course: Course) => {
    try {
      await courseService.updateCourseStatus(
        course.id,
        course.status === "active" ? "inactive" : "active"
      );

      toast.success(
        course.status === "active"
          ? "Course deactivated successfully."
          : "Course activated successfully."
      );

      refresh();
    } catch (error) {
      console.error(error);

      toast.error("Failed to update course status.");
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Courses"
        description="Manage training courses"
        actions={
          <Button onClick={handleCreate}>
            Create Course
          </Button>
        }
      />

      <CourseSearch
        value={search}
        onChange={setSearch}
      />

      {loading && (
        <p className="text-sm text-muted-foreground">
          Loading courses...
        </p>
      )}

      {!loading && courses.length === 0 && (
        <EmptyState
          title="No Courses"
          description="Create your first course."
        />
      )}

      {!loading &&
        courses.length > 0 &&
        filteredCourses.length === 0 && (
          <EmptyState
            title="No Results"
            description="No courses match your search."
          />
        )}

      {!loading && filteredCourses.length > 0 && (
        <CourseTable
          courses={filteredCourses}
          onEdit={handleEdit}
          onManagePlaylists={handleManagePlaylists}
          onToggleStatus={handleToggleStatus}
        />
      )}

      <CourseDialog
        open={open}
        onOpenChange={setOpen}
        mode={selectedCourse ? "edit" : "create"}
        course={selectedCourse}
        onSuccess={() => {
          setOpen(false);
          setSelectedCourse(undefined);
          refresh();
        }}
      />
    </div>
  );
}