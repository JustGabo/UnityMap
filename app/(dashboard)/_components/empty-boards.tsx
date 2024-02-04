"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {useMutation} from 'convex/react'

import {api} from '@/convex/_generated/api'
import { useOrganization } from '@clerk/nextjs'
import { useAPiMutation } from '@/hooks/use-api-mutation'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const EmptyBoards = () => {
  const router = useRouter()
  const {organization} = useOrganization()
  const {mutate, pending} = useAPiMutation(api.board.create)

  const onClick = ()=>{

    if (!organization) return
    mutate({
      orgId: organization.id,
      title: "Untitled"
    }).then((id)=> {
      toast.success("Board created ")
      router.push(`/board/${id}`)
    }).catch(()=> toast.error("Failed to create board"))
  }

  return (
    <section className='flex flex-col h-full  items-center justify-center'>
        <Image src='/note.svg' height={110} width={110} alt='Empty'/>
        <h2 className='text-2xl font-semibold mt-6'>Create your first board!</h2>
        <p className='text-muted-foreground text-sm mt-2'>Start by creating a board for your organization</p>
        <article className='mt-4'>
          <Button disabled={pending} onClick={onClick} size='lg' >
            Create board
          </Button>
        </article>
    </section>
  )
}

export default EmptyBoards