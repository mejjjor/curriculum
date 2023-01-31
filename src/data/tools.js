import git from "public/icons/git.png";
import github from "public/icons/github.png";
import gitlab from "public/icons/gitlab.webp";
import english from "public/icons/english.png";
import kanban from "public/icons/kanban.png";
import vscode from "public/icons/vscode.png";
import linux from "public/icons/linux.png";
import rgpd from "public/icons/rgpd.png";
import macos from "public/icons/macos.jpg";
import windows from "public/icons/windows.webp";

import labels from "./labels";

const data = [
  {
    label: labels.git,
    icon: git,
  },
  {
    label: labels.github,
    icon: github,
  },
  {
    label: labels.gitlab,
    icon: gitlab,
  },
  {
    label: labels.anglais,
    icon: english,
  },
  {
    label: labels.scrum,
    icon: kanban,
  },
  {
    label: labels.kanban,
    icon: kanban,
  },
  {
    label: labels.rgpd,
    icon: rgpd,
  },
  {
    label: labels.vscode,
    icon: vscode,
  },
  {
    label: labels.linux,
    icon: linux,
  },
  {
    label: labels.mac,
    icon: macos,
  },
  {
    label: labels.windows,
    icon: windows,
  },
];

export default data;
