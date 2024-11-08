import "./App.css";

function App() {
  return (
    <>
      <section className="top-txt">
        <div className="head container">
          <div className="head-txt">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
          <div className="sing_in_up">
            <a href="# ">SIGN IN</a>
            <a href="# ">SIGN UP</a>
          </div>
        </div>
      </section>
      <nav className="navbar">
        <div className="navbar-container">
          <input type="checkbox" name="" id="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sellers">Shop</a>
            </li>
            <li>
              <a href="#news">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="logo">
            <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" />
          </div>
        </div>
      </nav>
      <section id="home">
        <div className="home_page">
          <div className="home_img">
            <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img " />
          </div>
          <div className="home_txt">
            <p className="collectio">SUMMER COLLECTION</p>
            <h2>
              FALL - WINTER
              <br />
              Collection 2023
            </h2>
            <div className="home_label">
              <p>
                A specialist label creating luxury essentials. Ethically crafted
                <br />
                with an unwavering commitment to exceptional quality.
              </p>
            </div>
            <button>
              <a href="#sellers">SHOP NOW</a>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
            <div className="home_social_icons">
              <a to="/">
                <i className="bx bxl-facebook"></i>
              </a>
              <a to="/">
                <i className="bx bxl-twitter"></i>
              </a>
              <a to="/">
                <i className="bx bxl-pinterest"></i>
              </a>
              <a to="/">
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="collection">
        <div className="collections container">
          <div className="content">
            <img src="https://i.postimg.cc/Xqmwr12c/clothing.webp" alt="img" />
            <div className="img-content">
              <p>Clothing Collections</p>
              <button>
                <a href="#sellers">SHOP NOW</a>
              </button>
            </div>
          </div>
          <div className="content2">
            <img src="https://i.postimg.cc/8CmBZH5N/shoes.webp" alt="img" />
            <div className="img-content2">
              <p>Shoes Spring</p>
              <button>
                <a href="#sellers">SHOP NOW</a>
              </button>
            </div>
          </div>
          <div className="content3">
            <img src="https://i.postimg.cc/MHv7KJYp/access.webp" alt="img" />
            <div className="img-content3">
              <p>Accessories</p>
              <button>
                <a href="#sellers">SHOP NOW</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="sellers">
        <div className="seller container">
          <h2>Top Sales</h2>
          <div className="best-seller">
            <div className="best-p1">
              <img src="https://i.postimg.cc/8CmBZH5N/shoes.webp" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England Shoes</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="price">
                  &dollar;37.24
                  <div className="colors">
                    <i className="bx bxs-circle red"></i>
                    <i className="bx bxs-circle blue"></i>
                    <i className="bx bxs-circle white"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
                {/* <div className="add-cart">
                            <button>Add To Cart</button>
                        </div> */}
              </div>
            </div>
            <div className="best-p1">
              <img
                src="https://i.postimg.cc/76X9ZV8m/Screenshot_from_2022-06-03_18-45-12.png"
                alt="img"
              />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England Jacket</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="price">
                  &dollar;17.24
                  <div className="colors">
                    <i className="bx bxs-circle green"></i>
                    <i className="bx bxs-circle grey"></i>
                    <i className="bx bxs-circle brown"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="best-p1">
              <img src="https://i.postimg.cc/j2FhzSjf/bs2.png" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England Shirt</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="price">
                  &dollar;27.24
                  <div className="colors">
                    <i className="bx bxs-circle brown"></i>
                    <i className="bx bxs-circle green"></i>
                    <i className="bx bxs-circle blue"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="best-p1">
              <img src="https://i.postimg.cc/QtjSDzPF/bs3.png" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England Shoes</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <div className="price">
                  &dollar;43.67
                  <div className="colors">
                    <i className="bx bxs-circle red"></i>
                    <i className="bx bxs-circle grey"></i>
                    <i className="bx bxs-circle blue"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seller container">
          <h2>New Arrivals</h2>
          <div className="best-seller">
            <div className="best-p1">
              <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England T-Shirt</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <div className="price">
                  &dollar;10.23
                  <div className="colors">
                    <i className="bx bxs-circle blank"></i>
                    <i className="bx bxs-circle blue"></i>
                    <i className="bx bxs-circle brown"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="best-p1">
              <img src="https://i.postimg.cc/zD02zJq8/na2.png" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England Bag</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="price">
                  &dollar;09.28
                  <div className="colors">
                    <i className="bx bxs-circle brown"></i>
                    <i className="bx bxs-circle red"></i>
                    <i className="bx bxs-circle green"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="best-p1">
              <img
                src="https://i.postimg.cc/Dfj5VBcz/sunglasses1.jpg"
                alt="img"
              />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England Sunglass</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <div className="price">
                  &dollar;06.24
                  <div className="colors">
                    <i className="bx bxs-circle grey"></i>
                    <i className="bx bxs-circle blank"></i>
                    <i className="bx bxs-circle blank"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="best-p1">
              <img src="https://i.postimg.cc/FszW12Kc/na4.png" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England Shoes</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <div className="price">
                  &dollar;43.67
                  <div className="colors">
                    <i className="bx bxs-circle grey"></i>
                    <i className="bx bxs-circle red"></i>
                    <i className="bx bxs-circle blue"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seller container">
          <h2>Hot Sales</h2>
          <div className="best-seller">
            <div className="best-p1">
              <img src="https://i.postimg.cc/jS7pSQLf/na4.png" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England Shoes</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <div className="price">
                  &dollar;37.24
                  <div className="colors">
                    <i className="bx bxs-circle grey"></i>
                    <i className="bx bxs-circle black"></i>
                    <i className="bx bxs-circle blue"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="best-p1">
              <img src="https://i.postimg.cc/fbnB2yfj/na1.png" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England T-Shirt</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <div className="price">
                  &dollar;10.23
                  <div className="colors">
                    <i className="bx bxs-circle blank"></i>
                    <i className="bx bxs-circle blue"></i>
                    <i className="bx bxs-circle brown"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="best-p1">
              <img src="https://i.postimg.cc/RhVP7YQk/hs1.png" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England T-Shirt</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <div className="price">
                  &dollar;15.24
                  <div className="colors">
                    <i className="bx bxs-circle blank"></i>
                    <i className="bx bxs-circle red"></i>
                    <i className="bx bxs-circle blue"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="best-p1">
              <img src="https://i.postimg.cc/zD02zJq8/na2.png" alt="img" />
              <div className="best-p1-txt">
                <div className="name-of-p">
                  <p>PS England Bag</p>
                </div>
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                </div>
                <div className="price">
                  &dollar;09.28
                  <div className="colors">
                    <i className="bx bxs-circle blank"></i>
                    <i className="bx bxs-circle grey"></i>
                    <i className="bx bxs-circle brown"></i>
                  </div>
                </div>
                <div className="buy-now">
                  <button>
                    <a to="/">Buy Now</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="news">
        <div className="news-heading">
          <p>LATEST NEWS</p>
          <h2>Fashion New Trends</h2>
        </div>
        <div className="l-news container">
          <div className="l-news1">
            <div className="news1-img">
              <img src="https://i.postimg.cc/2y6wbZCm/news1.jpg" alt="img" />
            </div>
            <div className="news1-conte">
              <div className="date-news1">
                <p>
                  <i className="bx bxs-calendar"></i> 12 February 2022
                </p>
                <h4>What Curling Irons Are The Best Ones</h4>
                <a to="/" target="_blank">
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="l-news2">
            <div className="news2-img">
              <img src="https://i.postimg.cc/9MXPK7RT/news2.jpg" alt="img" />
            </div>
            <div className="news2-conte">
              <div className="date-news2">
                <p>
                  <i className="bx bxs-calendar"></i> 17 February 2022
                </p>
                <h4>The Health Benefits Of Sunglasses</h4>
                <a to="/" target="_blank">
                  read more
                </a>
              </div>
            </div>
          </div>
          <div className="l-news3">
            <div className="news3-img">
              <img src="https://i.postimg.cc/x1KKdRLM/news3.jpg" alt="img" />
            </div>
            <div className="news3-conte">
              <div className="date-news3">
                <p>
                  <i className="bx bxs-calendar"></i> 26 February 202
                </p>
                <h4>Eternity Bands Do Last Forever</h4>
                <a to="/" target="_blank">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact container">
          <div className="map">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.634392321388!2d77.59446037491934!3d27.60486243000506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sGLA%20University!5e0!3m2!1sen!2sin!4v1730785875441!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border: 0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
          <form action="" method="POST">
            <div className="form">
              <div className="form-txt">
                <h4>INFORMATION</h4>
                <h1>Contact Us</h1>
                <span>
                  As you might expect of a company that began as a high-end
                  interiors contractor, we pay strict attention.
                </span>
                <h3>USA</h3>
                <p>
                  195 E Parker Square Dr, Parker, CO 801
                  <br />
                  +43 982-314-0958
                </p>
                <h3>India</h3>
                <p>
                  HW95+C9C, Lorem ipsum dolor sit.
                  <br />
                  411014
                </p>
              </div>
              <div className="form-details">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  cols="52"
                  rows="7"
                  placeholder="Message"
                  required
                ></textarea>
                <button>SEND MESSAGE</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer>
        <div className="footer-container container">
          <div className="content_1">
            <img
              src="https://i.postimg.cc/htGyQ4JB/footer-logo.png"
              alt="logo"
            />
            <p>
              The customer is at the heart of our
              <br />
              unique business model, which includes
              <br />
              design.
            </p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
          <div className="content_2">
            <h4>SHOPPING</h4>
            <a href="#sellers">Clothing Store</a>
            <a href="#sellers">Trending Shoes</a>
            <a href="#sellers">Accessories</a>
            <a href="#sellers">Sale</a>
          </div>
          <div className="content_3">
            <h4>SHOPPING</h4>
            <a href="./contact.html">Contact Us</a>
            <a to="/" target="_blank">
              Payment Method
            </a>
            <a to="/" target="_blank">
              Delivery
            </a>
            <a to="/" target="_blank">
              Return and Exchange
            </a>
          </div>
          <div className="content_4">
            <h4>NEWLETTER</h4>
            <p>
              Be the first to know about new
              <br />
              arrivals, look books, sales & promos!
            </p>
            <div className="f-mail">
              <input type="email" placeholder="Your Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
        <div className="f-design">
          <div className="f-design-txt container">
            <p>Design and Code by code Yash</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
