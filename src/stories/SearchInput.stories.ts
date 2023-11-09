import '@/app/globals.css'
import { SearchInput } from '@/components/molecules/SearchInput'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  args: {
    placeholder: 'Placeholder text',
  },
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Molecules/SearchInput',
} satisfies Meta<typeof SearchInput>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
