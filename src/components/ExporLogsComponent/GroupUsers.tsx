import Image from 'next/image'

const avatars = [
  { src: '/icons/profile.png', alt: 'Jane F.' },
  { src: '/icons/profile1.png', alt: 'John S.' },
  { src: '/icons/profile2.png', alt: 'Kate M.' },
  { src: '/icons/profile3.png', alt: 'User 4' },
]

export default function GroupUsers() {
  return (
    <div className="flex items-center space-x-2 lg:mt-4">
      <div className="flex -space-x-3">
        {avatars.map((avatar, idx) => (
          <Image
            key={idx}
            src={avatar.src}
            alt={avatar.alt}
            width={32}
            height={32}
            className="rounded-full border-2 border-white shadow object-cover"
          />
        ))}
      </div>
      <span className="text-sm text-gray-500">
        Jane F., John S., Kate M., +12 others
      </span>
    </div>
  )
}
