import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import VideosExample from "@/components/ui/video/VideosExample";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Videos template",
};

export default function VideoPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Videos" />

      <VideosExample />
    </div>
  );
}
