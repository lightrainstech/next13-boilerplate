import { Avatar } from 'baseui/avatar'
import { Button } from 'baseui/button'
import MenuPopoverBody from '../ui/MenuPopoverBody'
import { StatefulPopover } from 'baseui/popover'
import { isDesktop } from '../../utils'
import { useState } from 'react'

export default () => {
  const [isDeskTopScreen] = useState(isDesktop)

  return isDeskTopScreen ? (
    <StatefulPopover
      content={({ close }) => <MenuPopoverBody isDesktop={isDeskTopScreen} />}
      triggerType={'click'}
      returnFocus
      autoFocus
      placement="bottomRight"
      overrides={{
        Body: {
          style: {
            backgroundColor: '#1B1C21'
          }
        }
      }}>
      <div
        className="hidden lg:flex  w-max h-max justify-center items-center rounded-full border border-transparent hover:border-white/50 p-1"
        role="button">
        <Avatar
          name="CVO"
          size="42px"
          src="https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy"
        />
      </div>
    </StatefulPopover>
  ) : (
    <StatefulPopover
      content={({ close }) => <AppMenu isDesktop={isDeskTopScreen} />}
      triggerType={'click'}
      returnFocus
      autoFocus
      placement="bottomRight"
      overrides={{
        Body: {
          style: {
            backgroundColor: '#1B1C21'
          }
        }
      }}>
      <Button
        size="compact"
        kind="secondary"
        overrides={{
          BaseButton: {
            style: {
              borderTopWidth: '1px',
              borderRightWidth: '1px',
              borderBottomWidth: '1px',
              borderLeftWidth: '1px',
              borderTopStyle: 'solid',
              borderRightStyle: 'solid',
              borderBottomStyle: 'solid',
              borderLeftStyle: 'solid',
              borderTopColor: 'rgba(255, 255, 255, 0.1)',
              borderRightColor: 'rgba(255, 255, 255, 0.1)',
              borderBottomColor: 'rgba(255, 255, 255, 0.1)',
              borderLeftColor: 'rgba(255, 255, 255, 0.1)'
            }
          }
        }}>
        <i className="ri ri-menu-line text-white/80" />
      </Button>
    </StatefulPopover>
  )
}
