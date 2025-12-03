import SwipeableTemporaryDrawer from '@/components/ui/SideMenu'
import React from 'react'
import ImageGallerySection from './ImageGallerySection'
import VideoGallerySection from './VideoGallerySection'
import { Typography } from '@mui/material'

const JobsPage = () => {
  return (
    <div className='container mx-auto p-4 mt-30 mb-10'>
      <div className="flex-col items-center justify-between gap-4">
        <div className="">
          <Typography variant="h4" sx={{ fontSize: { xs: "20px", lg: "25px" } }} className="font-bold text-gray-800 !mb-6 text-center">  گالری تصاویر و ویدئوها</Typography>
          <ImageGallerySection />
        </div>
        <VideoGallerySection />
      </div>
    </div>
  )
}

export default JobsPage