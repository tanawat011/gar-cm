import type { useDisclosure } from '@nextui-org/react'

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'

import { Button } from '../Button'

type ModalConfirmProps = {
  title?: string | React.ReactNode
  msg?: string | React.ReactNode
  onSubmit?: () => void
  onClose?: () => void
} & Omit<ReturnType<typeof useDisclosure>, 'onClose'>

export const ModalConfirm: React.FC<ModalConfirmProps> = ({ title, msg, ...props }) => {
  return (
    <Modal isOpen={props.isOpen} placement='center' onOpenChange={props.onOpenChange} onClose={props.onClose}>
      <ModalContent>
        <ModalHeader>{title || 'Confirm'}</ModalHeader>

        <ModalBody>
          <p>{msg || 'Are you sure?'}</p>
        </ModalBody>

        <ModalFooter>
          <Button label='Close' color='danger' variant='light' onPress={props.onClose} />
          <Button label='Confirm' color='primary' onPress={props.onSubmit} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
