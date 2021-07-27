import PageInterface from './page_interface';

const Error404: PageInterface = {

  render: async () => {
    const view = /* html */`
                <section class="section">
                    <h1> 404 Error </h1>
                </section>
            `;
    return view;
  },
  after_render: async () => {
  },
};
export default Error404;
