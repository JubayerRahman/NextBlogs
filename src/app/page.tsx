"use client"
import BlogFormDialog from "@/components/lib/blogFormDialog/blogFormDialog";
import BlogsBox from "@/components/lib/BlogsBox/BlogsBox";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {


  return (
    <div className="p-[20px] ">
      <div className="flex flex-row align-middle justify-between w-[95%] mx-auto mb-[10px] ">
    <BlogFormDialog/>
    </div>
      <BlogsBox/>
    </div>
  );
}
