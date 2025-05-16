## Recreate Your Favorite Website Using Bootstrap & JavaScript

This project has Bootstrap layout and components, while also using JavaScript skills with variables, functions, and strings.

### index.html
✅ Page Overview
Title: Event Center
Theme: Bootstrap 5, with light theme by default ```data-bs-theme="light```

# 🔝 Header / Navbar
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
# 🎉 Main Banner
- Dark-themed banner section with centered title: "Welcome to the Event Center"
- Includes a button that runs ```changeTitle()``` JavaScript function.

# 💳 Cards Section (Product Plans)
- Three Bootstrap cards:
- Basic Plan: 5 GB, 1 user — includes theme toggle button.
- Pro Plan: 50 GB, 5 users, email support — has an "About" link.
- Enterprise Plan: 1 TB, unlimited users, priority support — also has an "About" link.
