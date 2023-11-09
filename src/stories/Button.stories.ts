import '@/app/globals.css'
import { Button, ButtonVariant } from '@/components/atoms/Button'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {
    disabled: false,
    label: 'Button',
    variant: ButtonVariant.VARIANT1,
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Atoms/Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: ButtonVariant.VARIANT1,
  },
}

export const WithIcon: Story = {
  args: {
    icon: 'search',
  },
}
