const buttons = document.querySelectorAll('.filter');
const events = document.querySelectorAll('.event');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    events.forEach((event) => {
      const categories = event.dataset.category.split(' ');
      const shouldShow = filter === 'all' || categories.includes(filter);
      event.classList.toggle('hidden', !shouldShow);
    });
  });
});
