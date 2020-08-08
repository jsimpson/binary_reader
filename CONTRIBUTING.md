# Contributing

First of all, thank you for considering contributing to this module!

## Where do I go from here?

If you've noticed a bug or have a feature request, [make one][new issue]! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

If you have a general question about this module, feel free to open a new issue.

## Fork & create a branch

If this is something you think you can fix, then [fork binary_reader] and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):

```sh
git checkout -b 325-fix-read-bytes-oob
```

## Get the test suite running

Ensure that you have [Deno installed](https://deno.land/manual/getting_started/installation).

Now you should be able to run the entire suite using:

```sh
deno test .
```

## Implement your fix or feature

At this point, you're ready to make your changes!

## Get the style right

Follow the Deno [style guide](https://github.com/denoland/deno/blob/master/docs/contributing/style_guide.md) where appropriate.

Your patch should follow the same conventions & pass the same code quality checks as the rest of the project. `deno lint --unstable .` will give you feedback in this regard.

## Make a Pull Request

At this point, you should switch back to your master branch and make sure it's
up to date with binary_reader's master branch:

```sh
git remote add upstream git@github.com:jsimpson/binary_reader.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 325-fix-read-bytes-oob
git rebase master
git push --set-upstream origin 325-fix-read-bytes-oob
```

Finally, go to GitHub and [make a Pull Request][] :D

## Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, there are a lot of [good][git rebasing][resources][interactive rebase] but here's the suggested workflow:

```sh
git checkout 325-fix-read-bytes-oob
git pull --rebase upstream master
git push --force-with-lease 325-fix-read-bytes-oob
```
