import PageInterface from './page_interface';

const Menu: PageInterface = {

  render: async () => {
    const view = /* html */`
                <section class="section">
                    <h1> Menu </h1>
                    <ul>
                      <li><a href='./#/game'>New Game</a></li>
                      <li><a href='./#/rules'>Rules</a></li>
                    </ul>
                </section>
            `;
    return view;
  },
  after_render: async () => {
  },
};
export default Menu;
