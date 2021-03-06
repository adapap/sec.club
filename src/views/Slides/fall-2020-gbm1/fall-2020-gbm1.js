import React from "react";
import Logo from "../../../components/Logo/Logo";
import {Slide, SlideDeck} from "../../../components/SlideDeck/SlideDeck.js";
import "./fall-2020-gbm1.scss";

export default class SlidesFall2020Gbm1 extends React.Component {
    render(){
        return(
            <SlideDeck>
                <Slide className="intro">
                    <div style={{ width: "60%" }}>
                        <Logo />
                    </div>
                    <h1>Welcome Back to SEC!</h1>
                    <p><em>Open to all majors!</em></p>
                    <h2>Submit your github username: <a href="https://softe.club/gh-submit">softe.club/gh-submit</a></h2>
                    <h2>Join Slack: <a href="https://softe.club/slack">softe.club/slack</a></h2>
                </Slide>
                <Slide>
                    <h1>What are we doing this semester?</h1>
                    <p>Contributing to Open Source projects!</p>
                </Slide>
                <Slide>
                    <h1>Why should I do this?</h1>
                    <ul>
                        <li>Learning by doing is better than classes!</li>
                        <li>Looks great on resume!</li>
                        <li>Counts as community service!</li>
                        <li>Your work will <strong>LIVE FOREVER!</strong></li>
                    </ul>
                </Slide>
                <Slide>
                    <h1>How will this work?</h1>
                    <ol>
                        <li>Find a project you think is cool</li>
                        <li>Find an issue that you think you could fix</li>
                        <li>Fix it (with help from the club)</li>
                        <li>Submit a pull request!</li>
                    </ol>
                </Slide>
                <Slide>
                    <h1>How can I contribute?</h1>
                    <p>You can...</p>
                    <ul>
                        <li>Fix bugs</li>
                        <li>Add new features</li>
                        <li>Triage bugs</li>
                        <li>Test other people's pull requests</li>
                        <li>Write documentation</li>
                    </ul>
                </Slide>
                <Slide sticky>
                    <h1>Getting Started</h1>
                    <p>Don't know where to start?</p>
                    <p><a href="https://softe.club/fall2020">softe.club/fall-2020</a></p>
                    <h2>Submit your github username</h2>
                    <p>We'll send out invites soon. Make sure you set your full name in your github profile!</p>
                    <p><a href="https://softe.club/gh-submit">softe.club/gh-submit</a></p>
                    <h2>Make sure to join slack!</h2>
                    <p><a href="https://softe.club/slack">softe.club/slack</a></p>
                </Slide>
                <Slide>
                    <h1>What's it like contributing to open source projects?</h1>
                    <ul>
                        <li>It can seem kinda daunting.</li>
                        <li>Sometimes, things aren't documented.</li>
                        <li>Sometimes, you don't know where to look.</li>
                        <li>Sometimes, git is hard.</li>
                        <li>Sometimes, contributing guidelines are unclear.</li>
                    </ul>
                    <p>That's why SEC is here to support you!</p>
                </Slide>
                <Slide>
                    <h1>Goals for Tonight</h1>
                    <ol>
                        <li>Get in slack: <a href="https://softe.club/slack">softe.club/slack</a></li>
                        <li>Submit your github: <a href="https://softe.club/gh-submit">softe.club/gh-submit</a></li>
                        <li>Check your emails for the github org invite.</li>
                    </ol>
                    <h1>What to have for next week</h1>
                    <ol>
                        <li>A github account</li>
                        <li>git installed</li>
                        <li>An IDE (like Visual Studio Code)</li>
                        <li>A project or issue picked out (bonus points for starting)</li>
                    </ol>
                </Slide>
            </SlideDeck>
        )
    }
}
