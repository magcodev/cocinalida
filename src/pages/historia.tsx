import Header from "@components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="tarjeta-left">
          <div>
            <img
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div>
              <h5>Card title</h5>
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>Last updated 3 mins ago</p>
            </div>
          </div>
        </div>

        <div className="tarjeta-right">
          <div>
            
            <div>
              <h5>Card title</h5>
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>Last updated 3 mins ago tres</p>
            </div>
            <img
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="tarjeta-left">
          <div>
            <img
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
              alt=""
            />
            <div>
              <h5>Card title</h5>
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
