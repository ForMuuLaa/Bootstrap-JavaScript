## Recreate Your Favorite Website Using Bootstrap & JavaScript

This project has Bootstrap layout and components, while also using JavaScript skills with variables, functions, and strings.

# index.html
✅ Page Overview
Title: Event Center
Theme: Bootstrap 5, with light theme by default ```data-bs-theme="light```

## 🔝 Header / Navbar
- Uses Bootstrap's responsive navbar.
- Links: Home, About, Contact.
- Responsive toggle button for smaller screens.

          <body data-bs-theme="light">
              <header>
                  <!-- -------------------------- -->
                  <!-- navbar -->
                  <!-- -------------------------- -->
                  <nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary">
                      <div class="container-fluid">
                          <a id="nav-class" class="navbar-brand" href="/index.html">Navbar</a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                              aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                  <li class="nav-item">
                                      <a id="nav-class" class="nav-link active" aria-current="page" href="/index.html">Home</a>
                                  </li>
                                  <li class="nav-item">
                                      <a id="nav-class" class="nav-link" href="/about.html">About</a>
                                  </li>
                                  <li class="nav-item">
                                      <a id="nav-class" class="nav-link" href="/contact.html">Contact</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </header>

## 🎉 Main Banner
- Dark-themed banner section with centered title: "Welcome to the Event Center"
- Includes a button that runs ```changeTitle()``` JavaScript function.

              <!-- -------------------------- -->
              <!-- banner -->
              <!-- -------------------------- -->
          
              <main>
                  <div id="main-banner" class="container-fluid bg-dark text-white text-center py-5">
                      <h1 id="title">Welcome to the Event Center</h1>
                      <button onclick="changeTitle()" class="btn btn-secondary">Click me</button>
                  </div>

## 💳 Cards Section (Product Plans)
- Three Bootstrap cards:
- Basic Plan: 5 GB, 1 user — includes theme toggle button.
- Pro Plan: 50 GB, 5 users, email support — has an "About" link.
- Enterprise Plan: 1 TB, unlimited users, priority support — also has an "About" link.
          
              <!-- -------------------------- -->
              <!-- Cards -->
              <!-- -------------------------- -->
          
                  <section class="events text-center">
                      <div class="container">
                          <div class="row flex-row ">
          
                              <!-- Card 1 (this is column sized 4 out of maximum 12, so it takes up 1/3rd of its parent container) -->
                              <div class="col-md-3 mx-auto mt-5">
                                  <div class="card" style="width: 18rem;">
                                      <img src="https://picsum.photos/200/200" class="card-img-top" alt="Image">
                                      <div class="card-body">
                                          <h5 class="card-title">Basic Plan</h5>
                                          <p class="card-text">Perfect for individuals starting out. Includes essential features
                                              with 5 GB storage and access for 1 user. Ideal for personal use and simple projects.
                                          </p>
                                          <button id="button" onclick="toggleTheme(this)" class="btn btn-primary">Toggle
                                              Theme</button>
                                      </div>
                                  </div>
                              </div>
          
                              <!-- Card 1 (this is column sized 4 out of maximum 12, so it takes up 1/3rd of its parent container) -->
                              <div class="col-md-3 mx-auto  mt-5">
                                  <div class="card" style="width: 18rem;">
                                      <img src="https://picsum.photos/200/200" class="card-img-top" alt="Image">
                                      <div class="card-body">
                                          <h5 class="card-title">Pro Plan</h5>
                                          <p class="card-text">Designed for small teams and professionals. Supports up to 5 users,
                                              includes 50 GB storage, and comes with email support. Great value for growing
                                              businesses.</p>
                                          <a href="about.html" class="btn btn-primary">About</a>
                                      </div>
                                  </div>
                              </div>
          
                              <!-- Card 1 (this is column sized 4 out of maximum 12, so it takes up 1/3rd its parent container) -->
                              <div class="col-md-3 mx-auto mt-5">
                                  <div class="card" style="width: 18rem;">
                                      <img src="https://picsum.photos/200/200" class="card-img-top" alt="Image">
                                      <div class="card-body">
                                          <h5 class="card-title">Enterprise Plan</h5>
                                          <p class="card-text">Built for large teams and organizations. Unlimited user access, 1
                                              TB of cloud storage, and priority support. Customized pricing available for tailored
                                              needs.</p>
                                          <a href="about.html" class="btn btn-primary">About</a>
                                      </div>
                                  </div>
                              </div>
          
                          </div> <!-- End row -->
                      </div> <!-- End container -->
                  </section>
              </main>
          
# contact.html

## 🔝 Header / Navbar
- Responsive Bootstrap navbar
- Links to: Home, About, Contact.
- Collapsible menu for mobile view

          
                  <!-- -------------------------- -->
                  <!-- navbar -->
                  <!-- -------------------------- -->
                  <nav class="navbar navbar-expand-lg bg-body-tertiary">
                      <div class="container-fluid">
                          <a id="nav-class" class="navbar-brand" href="/index.html">Navbar</a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                              aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                  <li class="nav-item">
                                      <a id="nav-class" class="nav-link" href="/index.html">Home</a>
                                  </li>
                                  <li class="nav-item">
                                      <a id="nav-class" class="nav-link" href="/about.html">About</a>
                                  </li>
                                  <li class="nav-item">
                                      <a id="nav-class" class="nav-link active" aria-current="page"
                                          href="/contact.html">Contact</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </header>


## 📢 Banner Section
- Full-width dark background banner
- Centered title: 🌐 Contact Us 🌐

              <!-- -------------------------- -->
              <!-- banner -->
              <!-- -------------------------- -->
              <div id="main-banner" class="container-fluid bg-dark text-white text-center py-5">
                  <h1 id="title">🌐 Contact Us 🌐</h1>
              </div>

## ✉️ Contact Form
- Bootstrap-styled form with:
- Email input with helper text
- First and last name inputs (side-by-side on large screens)
- Checkbox option ("Check me out")
- Submit button


                        <!-- -------------------------- -->
                        <!-- contavt form -->
                        <!-- -------------------------- -->
                        <main>
                            <form class="contact-form p-5">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="row my-5">
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                                    </div>
                                    <div class="col">
                                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                                    </div>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </main>
