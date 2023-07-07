import React, { ReactNode } from 'react'

interface ProjectLaytoutProps {
  children: ReactNode
}

export default function ProjectLayout({ children }: ProjectLaytoutProps) {
  return <div>{children}</div>
}
