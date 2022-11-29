export const keys = ['F4', 'F5', 'F12'];
export const inputKeys = ['Backspace', 'Esc'];
export const altKeys = ['ArrowRight', 'ArrowLeft', 'C'];
export const shiftKeys = ['Backspace', 'F10'];
export const ctrlKeys = ['F5', 'B', 'D', 'G', 'H', 'I', 'J', 'K', 'N', 'R'];
export const ctrlShiftKeys = ['D', 'H', 'I', 'T'];

export function includes(arr: string[], item: string) {
  for(let i = 0; i < arr.length; i ++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}
