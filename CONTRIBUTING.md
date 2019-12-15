# Contributing

👍 🎉 Thanks for taking the time to contribute! 🎉 👍

Any contributions to this repository are most welcome. If you are planning to contribute, please take time to read this file and follow the guidelines.

## How to

#### There are quite a few ways to contribute, but following is the recommended approach.

`1. Fork this repository :fork_and_knife:`

When you fork this repository you will have a personal copy of the repository where you will have complete access to edit any file.
Edit the files you want to and commit the changes.

### Prerequisites:

```
You must have npm and nodejs installed.
```

### To use the application:

```
1. Clone the project
2. Run npm install
3. Run npm start
```

### Build:

Detect Platform:

```bash
npm run dist
```

Windows:

```bash
npm run build-win
```

Mac:

```bash
npm run build-mac
```

Linux:

```bash
npm run build-linux
```

Cross Platform:

```bash
npm run build
```

### Tests

```bash
npm test
```

> Many tests depend on newlines being preserved as `<LF>`. On Windows, you can ensure this by cloning with:
>
> ```bash
> git -c core.autocrlf=false clone https://github.com/varundevpro/calcy.git
> ```

#### To force 32 bit build:

_Append "-- --ia32" to npm run command_

Example:

```bash
npm run build-win -- --ia32
```

`2. Make a Pull request`

When you are done editing the file(s) and have commited the changes to the fork, you can now make a pull request to this repository.
You will see a Pull request option alogside compare just above the Latest commit message in your fork.
Please beaware making a pull request to your own repository and making a pull request to this repository are two different things.
You need to click on the `Pull request button` and not the `Pull requests tab`.

`3. Wait for the changes to get approved`

After making a Pull request you will see your pull request listed in the `Pull requests section` in the original repository.
Your changes will be reviewed and once the changes are approved they will be merged and hence will get applied to the original repository.
You might be asked to improve or make further changes, if the the commits you made could not be approved for some reason. In that case, you will need to edit the files again.
Please note that, you do not have to make another pull request, just make the changes you are supposed to in the fork and it will get reflected in the already made pull request.
