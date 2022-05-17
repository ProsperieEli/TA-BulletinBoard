export default function renderBoards(board) {
    const div = document.createElement('div')

    const h1 = document.createElement('h1')
    h1.textContent = board.task;

    const p = document.createElement('p')
    p.textContent = board.name;

    const date = document.createElement('p')
    date.textContent = board.dop;

    const toggle = document.createElement('div')
    toggle.inputMode = board.completed;

    div.append(h1, p, date, toggle)
    return div;
}