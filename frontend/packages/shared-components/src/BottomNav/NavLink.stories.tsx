import type { Meta, StoryObj } from '@storybook/react';

import {NavLink } from './NavLink';
import { MemoryRouter } from "react-router";
import { StarIcon, BlackStarIcon } from '../Icon';

type Story = StoryObj<typeof NavLink>;

const meta: Meta<typeof NavLink> = {
  component: NavLink,
  title: 'Components/BottomNav/NavLink',
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
  parameters: {
    controls: { expanded: true },
  },
  tags: ['autodocs'],
};


export default meta;

export const NavLinkStory: Story = {
  args: {
    to: "/",
    label: "Home",
    color: "black",
    topIcon: <StarIcon />,
    active: true,
  },
};
