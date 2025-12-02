```bash
git init

git add .

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/ashokkumar-kola/ashoka-portfolio.git

git push -u origin main
```

## Git Dev Branch

```bash
git checkout -b dev
git push -u origin dev

# Check branch
git branch

# Make your changes (coding)
git add .
git commit -m "message"
git push

# Merge changes to main (production)
git checkout main
git pull
git merge dev
git push

# Future Development
git checkout dev
git checkout -b feature/homepage-ui

git add .
git commit -m "Added homepage UI"
git push -u origin feature/homepage-ui

- Then on GitHub → Open PR → Merge into dev.

# Keep dev up-to-date with main
git checkout dev
git pull
git merge main

git push
```

```bash


```

```bash

```

```bash

```

    <!-- Simple Line Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css">


    <!-- Font Awesome Icons -->
