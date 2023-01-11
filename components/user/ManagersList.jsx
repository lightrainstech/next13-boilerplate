import { Avatar } from 'baseui/avatar'
import { Button } from 'baseui/button'
import ManagerInvitationModal from './ManagerInvitationModal'
import { useState } from 'react'

export default () => {
  const [isInvitatonModalOpen, setIsInvitatonModalOpen] = useState(false)
  return (
    <>
      <div className="grid grid-flow-row justify-items-stretch gap-3">
        <div className="flex justify-between items-end">
          <p className="text-white font-medium text-xl">Managers</p>
          <div>
            <Button
              size="compact"
              disabled
              startEnhancer={<i className="ri ri-add-line" />}
              onClick={() => setIsInvitatonModalOpen(true)}>
              Add Manager
            </Button>
          </div>
        </div>
        <div className="rounded-xl bg-[#1b1c21] max-h-60 overflow-scroll">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border-b border-white/10 last:border-none p-4">
              <Avatar
                name="Jane Doe"
                size="48px"
                src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy"
              />
              <div>
                <p className="text-white font-medium">Jasmine Kylian</p>
                <p className="text-white/50 font-light">jasmin@gmail.com</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ManagerInvitationModal
        isOpen={isInvitatonModalOpen}
        setIsOpen={setIsInvitatonModalOpen}
      />
    </>
  )
}
