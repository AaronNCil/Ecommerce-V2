import React from "react";

const Contact = () => {
    return (
        <main>
        <div class="container">
          <h1 class="brand">Soundwave LLC</h1>
          <div class="wrapper">
            <div class="company-info">
              <h3><i class="fa-solid fa-headphones-simple"></i> Soundwaves</h3>
              <ul>
                <li>1101 Red Ventures Dr, Fort Mill, SC 29707</li>
                <li>(980)296-3509</li>
                <li>redventrues@redventures.com</li>
              </ul>
            </div>
            <div class="contact">
              <h3>Email us</h3>
              <form>
                <p>
                  <label>Name</label>
                  <input type="text" name="name" required />
                </p>
                <p>
                  <label>Company</label>
                  <input type="text" name="company" required />
                </p>
                <p>
                  <label>Email</label>
                  <input type="email" name="email" required />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="number" name="phone" required />
                </p>
                <p class="full">
                  <label>Message</label>
                  <textarea name="message" rows="5"></textarea>
                </p>
                <p class="full">
                  <button>Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Contact