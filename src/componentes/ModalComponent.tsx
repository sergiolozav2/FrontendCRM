import { Dialog, DialogContent } from "@mui/material";

interface Props {
  openModal: boolean;
  children: JSX.Element | JSX.Element[];
  handleCloseModal: () => void;
  expanded?: boolean;
}

export const ModalComponent = ({
  openModal,
  handleCloseModal,
  children,
  expanded,
}: Props) => {
  return (
    <Dialog
      fullWidth
      maxWidth={expanded ? "md" : "sm"}
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
