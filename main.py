import os

# Define folder and file structure
folder_structure = {
    "frontend": {
        "React": {
            "components": {
                "JavaScript": {
                    "Login.jsx": "React Login component (JavaScript)",
                    "Signup.jsx": "React Signup component (JavaScript)",
                    "Home.jsx": "React Home component (JavaScript)"
                },
                "TypeScript": {
                    "Login.tsx": "React Login component (TypeScript)",
                    "Signup.tsx": "React Signup component (TypeScript)",
                    "Home.tsx": "React Home component (TypeScript)"
                }
            },
            "pages": {
                "JavaScript": {
                    "Index.jsx": "React Index Page template (JavaScript)"
                },
                "TypeScript": {
                    "Index.tsx": "React Index Page template (TypeScript)"
                }
            },
            "styles": {
                "App.css": "App-level CSS styles"
            }
        },
        "HTML": {
            "index.html": "<!DOCTYPE html><html><head><title>Starter Kit</title></head><body></body></html>"
        }
    },
    "backend": {
        "Django": {
            "settings.py": "Django settings template",
            "urls.py": "Django URL configuration",
            "views.py": "Django views template"
        },
        "Flask": {
            "app.py": "Flask app template",
            "routes.py": "Flask routes template"
        },
        "FastAPI": {
            "main.py": "FastAPI main app file",
            "schemas.py": "FastAPI schemas for request/response",
            "models.py": "FastAPI models"
        },
        "Express": {
            "JavaScript": {
                "app.js": "// Express app JavaScript template",
                "routes": {
                    "index.js": "// Express routes template"
                }
            },
            "TypeScript": {
                "app.ts": "// Express app TypeScript template",
                "routes": {
                    "index.ts": "// Express routes template with TypeScript"
                }
            }
        },
        "Deno": {
            "JavaScript": {
                "app.js": "// Deno app JavaScript template",
                "routes": {
                    "index.js": "// Deno routes template (JavaScript)"
                }
            },
            "TypeScript": {
                "app.ts": "// Deno app TypeScript template",
                "routes": {
                    "index.ts": "// Deno routes template (TypeScript)"
                }
            }
        }
    },
    "styling": {
        "TailwindCSS": {
            "tailwind.config.js": "// TailwindCSS configuration"
        },
        "Bootstrap": {
            "bootstrap.css": "// Bootstrap styles"
        },
        "SCSS": {
            "styles.scss": "// SCSS main file"
        },
        "CSS": {
            "styles.css": "// Basic CSS file"
        }
    },
    "databases": {
        "SQLite": {
            "migrations": {},
            "config": {"sqlite_config.py": "# SQLite Configuration"}
        },
        "PostgreSQL": {
            "schemas": {},
            "config": {"postgres_config.py": "# PostgreSQL Configuration"}
        },
        "MongoDB": {
            "collections": {},
            "config": {"mongo_config.py": "# MongoDB Configuration"}
        },
        "MySQL": {
            "schemas": {},
            "config": {"mysql_config.py": "# MySQL Configuration"}
        },
        "Drizzle": {
            "JavaScript": {
                "index.js": "// Drizzle ORM setup for JavaScript",
                "schema.js": "// Drizzle schema for JavaScript"
            },
            "TypeScript": {
                "index.ts": "// Drizzle ORM setup for TypeScript",
                "schema.ts": "// Drizzle schema for TypeScript"
            }
        }
    },
    "scripts": {
        "build.sh": "# Build script",
        "deploy.sh": "# Deploy script"
    },
    "docs": {
        "README.md": "# Documentation for the starter kit"
    },
    "tests": {
        "test.js": "// Unit tests for backend or frontend"
    }
}

# Function to create folders and files
def create_structure(base_path, structure):
    for name, content in structure.items():
        path = os.path.join(base_path, name)
        if isinstance(content, dict):
            os.makedirs(path, exist_ok=True)
            create_structure(path, content)
        else:
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'w') as file:
                file.write(content)

# Specify the root directory for the project
root_dir = "starter_kit"
os.makedirs(root_dir, exist_ok=True)

# Generate the folder structure
create_structure(root_dir, folder_structure)

print(f"Project structure created successfully under '{root_dir}'")