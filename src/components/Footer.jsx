export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div>© {new Date().getFullYear()} VoxLab. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-900" href="#">Docs</a>
          <a className="hover:text-gray-900" href="#">Privacy</a>
          <a className="hover:text-gray-900" href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
