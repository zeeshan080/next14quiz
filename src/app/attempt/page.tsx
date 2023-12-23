import Link from 'next/link'
import React from 'react'

type Props = {}

export default function AttemptPage({}: Props) {
  return (
    <main>
        <div>
            Catagories
        </div>
        <div>
            <Link href={"/"}>Math</Link>
            <Link href={"/"}>Science</Link>
            <Link href={"/"}>English</Link>
            <Link href={"/"}>History</Link>

        </div>
    </main>
  )
}