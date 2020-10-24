---
title: 'QSR Semi Released'
date: '2020-03-22'
---


Over the past month or so I’ve been working on an interesting project, and I’m happy to say that it’s finally sort of finished… Now that isn’t to say that it’s an absolute perfect piece of software, but people should be able to at least use it and expect some stability.

So what even is it? It’s a simple command line tool that takes a gist from GitHub, downloads it, and runs it with the proper runtime. These scripts could be Ruby, Python, NodeJS, Batch, Shell, and of course GoLang.

So how do I use it? Just head on over to the [releases](https://github.com/GreatGodApollo/qsr/releases) page and download the proper release for your platform. Extract it using your tool of choice and enjoy. I currently have a testing gist over @ [71725ce655618f222c17c23e893f99fc](https://gist.github.com/GreatGodApollo/71725ce655618f222c17c23e893f99fc) so you can check out some scripts there.

To run one of those scripts just do `qsr run [gist] [scriptname]` and you’re set. As long as you have the languages installed you should be able to run everything on that page. QSR scripts don’t require any specific set up from the author. They’re only standard scripts written in any given language.

Currently language support is low, because I wasn’t sure what languages would be most useful. If you’d like another language to be added you can either create a [pull request](https://github.com/GreatGodApollo/qsr/pulls) or an [issue](https://github.com/GreatGodApollo/qsr/issues) if you have no clue what you’re doing.

Let me know of any bugs you find and enjoy!