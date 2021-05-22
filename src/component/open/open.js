import React from 'react';

class open extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/dever404/repos")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }  

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <div className='open'>
          <h1 > Open Source </h1>
          <hr className='my-4 my-lg-5' />
          <div className='col-12 col-lg-8 mx-auto'>
            <div class="row">
              { items.map(item => (
                  <div class={item.fork == false ? "col-12 col-lg-4 mb-4" : "d-none" } >
                    <div class="card h-100">
                      <div class="card-body">
                        <h5 class="card-title">{ item.name }</h5>
                        <p class="card-text">{ item.description }</p>
                        <a className='read-more' href={  item.html_url } target='_blank'></a>
                      </div>
                    </div>
                </div>
              )) }
            </div>
          </div>  
        </div>
      );
    }
  }
};

export default open;