import { getUserWorkspaces } from '@/app/data/workspace/get-user-workspaces'
import CreateWorkspaceForm from '@/components/workspace/CreateWorkspaceForm'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const {data} = await getUserWorkspaces()
  
  if(!data?.onboardingCompleted) redirect("/onboarding");

  return (
    <CreateWorkspaceForm/>
  )
}

export default page