export const checkBudget = (budget, remaining) => {
    let show;

    if ((budget / 4) > remaining) {
        show = 'alert alert-danger';
    } else if ((budget / 2) > remaining) {
        show = 'alert alert-warning';
    } else {
        show = 'alert alert-success'
    }
    return show;
}