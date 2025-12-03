import VideoPlayer from '@/components/ui/VideoComponent'
import React from 'react'

const VideoGallerySection = () => {

    const videos = [
        { id: 1, src: '/assets/gallery/vids/v(1).MOV', title: 'نمایه شرکت' },
        { id: 2, src: '/assets/gallery/vids/v(1).mp4', title: 'انفجار معدن' },
        { id: 2, src: '/assets/gallery/vids/v(2).mp4', title: 'انفجار معدن' },
        { id: 3, src: '/assets/gallery/vids/v(3).mp4', title: 'انفجار معدن' },
        { id: 4, src: '/assets/gallery/vids/v(4).mp4', title: 'کیفیت و نرمی گج' },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-500 md:h-200 lg:h-150 gap-4 mt-10 justify-center'>
            {videos.map((video) => (
                <VideoPlayer key={video.id} src={video.src} />
            ))}
        </div>
    )
}

export default VideoGallerySection