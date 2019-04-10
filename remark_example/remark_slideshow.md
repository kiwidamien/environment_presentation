---
title: Foobar
theme: solarized
revealOptions:
    transition: 'fade'
---
<section data-background="rgb(83, 157, 211)">

<div class="title_page">

<h1>Intro to Environments</h1>
<img src='logo.png'/>
</div>

<div class="myLogo"></div>
---

### Problem

We want our code to be

* __Reproducible:__
  Can someone else run our code?

* __Resolve conflicts:__
  Run projects that have different requirements.

e.g.
* **Project 1** requires scikit-learn 0.20 to use new pipelines, and scikit-learn 0.20 needs numpy > 1.16
* **Project 2** requires
numpy < 1.12 to use some renamed functions.

---

### Environments

One solution is to use _environments_

* __environment__: an isolated Python distribution and its packages.

* __yaml__ file: (or __requirements__ file) instructions for recreating the environment.

We will be using `conda` environments, but other choices are available.

Notes: Pip is the other common installer. The difference between pip and conda is "pip manages Python packages in any environment, conda manages any packages in a conda environment". If we are mostly doing Python development, the difference is minimal.

---

### Using an environment

You have at least two environments:
* _base_ or _Python3_ (the default)
* _metis_ (our standardized environment)

You can have many different environments on your machine, but only one is _active_ at a time.

The _active environment_ is the one Python command-line programs use.

```bash
(metis) folder_name$ python
```

Here "metis" is the name of environment.

Notes: This is focusing on the idea of environments, rather than the commands to activate/deactivate. We will have an exercise to cover that. Note this will launch the _metis_ environment's Python.

---

### Using an environment with Jupyter

In Jupyter notebooks, setting the _kernel_ sets the environment.

![Showing the notebook](images/kernel.png)

You can launch the notebook from any terminal.

Notes: Last point can be emphasized. In particular, you can launch Jupyter notebook from the _base_ environment, and still launch notebooks that use the _metis_ kernel.

---

### Workflow

1. Create or clone environment (once per project)
2. Register kernel (once per environment)
3. Use environment / kernel (everyday)
4. Freeze / export environment for others

Notes: In our metis repo, we have already created the "frozen" environments for students. Step 4 will generally by skipped.

---

# YAML files
## Environment recipes

---

### Creating an environment from "recipe"


```yaml
name: metis
channels:
  - defaults
  - conda-forge
dependencies:
  - pandas>=0.24.0
  - python=3.6
  - scikit-learn=0.20
  - seaborn
```



These are instructions to

* Make a new environment called `metis`
* Look for packages in the default locations, and `conda-forge`
* Install a version of
  * Python 3.6
  * Pandas, no earlier than 0.24.0
  * Scikit-learn version 0.20
  * The latest version of seaborn
  ...so that all packages are compatible

Conda will automatically install packages that these packages depend on.

Notes: Emphasize these are the yaml files in the project folders.

---

### Recipe: include everything

```bash
(metis) some_folder$ conda env export > environment.yml
```

Copies _all_ files and __exact__ version numbers to create "recipe" `environment.yml`


#### Pros
* Know the versions work together
* Reproduces the environment exactly

#### Cons
* Some packages only available for some OSes
* Different OSes resolve dependencies differently
* Will not be exposed to "latest and greatest"

* Biggest pain points: programs with multiple OSes
* Partial solution: Delete everything except things you explicitly import

---

### Recipe: remove version numbers

Create a YAML file manually (or from the previous command) but only put minimum values on version numbers.

#### Pros
* Access to latest and greatest
* Portable across systems

#### Cons
* Deprecated functions being removed can still break programs.


Notes: Technically only portable across systems that can resolve the packages you are importing, but the thing to emphasize is this is the best we can hope for. In the previous case, not only did we need to be able to import, but the chain of packages had to be the same. PIL/Pillow is an example of a package available for OSX that is not available for Windows, but Windows resolves dependencies in an alternative way.

---

### Reproducibility is a spectrum

---
