"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Send } from "lucide-react"

// Mock data for comments
interface Comment {
  id: number
  author: string
  authorImage: string
  date: string
  content: string
  likes: number
  replies?: Comment[]
}

interface CommentsSectionProps {
  postId: number
}

export function CommentsSection({ postId }: CommentsSectionProps) {
  // Mock initial comments data
  const initialComments: Comment[] = [
    {
      id: 1,
      author: "Alex Johnson",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "May 10, 2025",
      content:
        "This is a fantastic article! I've been following the developments in this space for a while, and your analysis is spot on. Looking forward to more content like this.",
      likes: 12,
      replies: [
        {
          id: 3,
          author: "CrossFi Team",
          authorImage: "/placeholder.svg?height=40&width=40",
          date: "May 10, 2025",
          content: "Thanks for your support, Alex! We're glad you found the article helpful.",
          likes: 3,
        },
      ],
    },
    {
      id: 2,
      author: "Sarah Williams",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "May 9, 2025",
      content:
        "I appreciate the detailed breakdown of these concepts. It's made the topic much more accessible for newcomers like me. One question though - how do you see this affecting smaller investors in the long term?",
      likes: 8,
    },
  ]

  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !name.trim()) return

    const newCommentObj: Comment = {
      id: comments.length + 1,
      author: name,
      authorImage: "/placeholder.svg?height=40&width=40", // Default placeholder
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      content: newComment,
      likes: 0,
    }

    setComments([...comments, newCommentObj])
    setNewComment("")
    setName("")
    setEmail("")
  }

  const handleSubmitReply = (commentId: number) => {
    if (!replyContent.trim()) return

    const newReply: Comment = {
      id: Date.now(), // Use timestamp as a simple unique ID
      author: "You",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      content: replyContent,
      likes: 0,
    }

    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply],
        }
      }
      return comment
    })

    setComments(updatedComments)
    setReplyingTo(null)
    setReplyContent("")
  }

  const handleLike = (commentId: number, isReply = false, parentId?: number) => {
    if (isReply && parentId) {
      // Handle liking a reply
      const updatedComments = comments.map((comment) => {
        if (comment.id === parentId && comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === commentId) {
                return { ...reply, likes: reply.likes + 1 }
              }
              return reply
            }),
          }
        }
        return comment
      })
      setComments(updatedComments)
    } else {
      // Handle liking a main comment
      const updatedComments = comments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, likes: comment.likes + 1 }
        }
        return comment
      })
      setComments(updatedComments)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mb-16">
      <h2 className="text-2xl font-bold mb-8">Comments ({comments.length})</h2>

      {/* Comments list */}
      <div className="space-y-8 mb-12">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={comment.authorImage || "/placeholder.svg"}
                    alt={comment.author}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold">{comment.author}</h4>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700 mb-3">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(comment.id)}
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#0066FF]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                    <span>{comment.likes}</span>
                  </button>
                  <button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="text-sm text-gray-500 hover:text-[#0066FF]"
                  >
                    Reply
                  </button>
                </div>

                {/* Reply form */}
                {replyingTo === comment.id && (
                  <div className="mt-4 flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image src="/placeholder.svg?height=32&width=32" alt="You" fill className="object-cover" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <input
                          type="text"
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          placeholder="Write a reply..."
                          className="flex-grow px-4 py-2 outline-none"
                        />
                        <button
                          onClick={() => handleSubmitReply(comment.id)}
                          className="bg-[#0066FF] text-white p-2 hover:bg-[#0052CC]"
                        >
                          <Send size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-6 space-y-6 pl-6 border-l border-gray-100">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={reply.authorImage || "/placeholder.svg"}
                              alt={reply.author}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-semibold text-sm">{reply.author}</h5>
                            <span className="text-xs text-gray-500">{reply.date}</span>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{reply.content}</p>
                          <button
                            onClick={() => handleLike(reply.id, true, comment.id)}
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#0066FF]"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                            </svg>
                            <span>{reply.likes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comment form */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-6">Leave a Comment</h3>
        <form onSubmit={handleSubmitComment}>
          <div className="mb-6">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              Your Comment
            </label>
            <textarea
              id="comment"
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
              placeholder="Share your thoughts..."
              required
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                placeholder="Your email (will not be published)"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#0066FF] text-white rounded-lg hover:bg-[#0052CC] transition-colors"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  )
}
