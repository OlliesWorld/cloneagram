import React, { useRef } from 'react'

import Header from './header'
import Image from './image'
import Actions from './actions'
import Footer from './footer'
import Comments from './comments'

export default function Post({ content }) {
    const commentInput = useRef(null)
    const handleFocus = () => commentInput.current.focus()

    return (
        <div className="rounded col-span-4 bg-white border-gray mb-16">
            <Header username={content.username} />
            <Image src={content.imageSrc} caption={content.caption} />
            <Actions
                docId={content.docId}
                totalLikes={content.likes.length}
                LikedPhoto={content.userLikedPhoto}
                handleFocus={handleFocus}
            />

            <Footer username={content.username} caption={content.caption} />
            <Comments
                docId={content.id}
                comments={content.comments}
                posted={content.dateCreated}
                commentInput={commentInput}
            />
        </div>

    )
}