import '@/app/globals.css'
import { Input, InputSize } from '@/components/atoms/Input'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {
    disabled: false,
    placeholder: 'Placeholder value..',
    size: InputSize.S,
    value: '',
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Atoms/Input',
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: InputSize.S,
  },
}

export const Large: Story = {
  args: {
    size: InputSize.L,
  },
}
