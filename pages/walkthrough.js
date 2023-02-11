import Layout from "../components/layout";
import Paper from "@mui/material/Paper";

export default function Walkthrough() {
  return (
    <Layout>
      <h1>Walkthrough</h1>
      <hr />
      <Paper elevation={3}>
      <h2>Zanarkand</h2>
      <hr />
      <h3>Objectives: </h3>
      <ul>
        <li>Break through the Sinscales</li>
        <li>Eliminate the Sinspawn</li>
      </ul>
      <hr />
      <h3>Enemies: </h3>
      <ul>
        <h4>Sinscales:</h4>
        <li>HP: 100 | AP: 0</li>
        <li>Gil: 0</li>
        <li>Drop: N/A</li>
        <li>Steal: N/A</li>
        <h4>Sinspawn:</h4>
        <li>HP: 2400 | AP: 0</li>
        <li>Gil: 0</li>
        <li>Drop: N/A</li>
        <li>Steal: N/A</li>
      </ul>
      <hr />
      <h3>Story</h3>
      <p>
        <h4>The Star Blitzer</h4>
        As the game begins, Tidus is on his way to a blitzball match at Zanarkand's stadium. He is stopped by a small crowd that has gathered outside of his residence. After speaking with the people in the crowd, he can move past them. To get to the stadium, he travels across a bridge full of people. While jogging down the bridge, a presentation of Jecht, Tidus's father, is played on a big screen. Jecht was a legendary Blitzball player who mysteriously dissapeared. As you approach the stadium, a crowd mobs Tidus and won't let him through. He squeezes through the people to the large doorway.
        <br />
        <h4>The Stadium in Ruins</h4>
        During the exciting blitzball match, Zanarkand gets attacked by Sin! As this occurs, Tidus falls from about and lands in the rubble outside. Tidus runs down the ramp until he spots Auron and follows him into the city streets.
        <h4>The Invasion</h4>
        Tidus and Auron watch as a large monster crashes into a nearby building. A swarm of Sinscales emanate from its tail and land in front of the duo. Auron then hands Tidus a <b>Longsword</b>. They eliminate the enemies and move to the next area.
        <h4>Progeny of Sin</h4>
        The twosome finally reach the location where the gigantic creature has crash-landed. The fight with the boss begins.
      </p>
      <hr />
      <h3>Boss</h3>
      <p>
        <h4>Sinspawn Ammes</h4>
        This boss gets to attack first, and always casts a spell called <b>Demi</b>.
        This is a black magic spell that reduces the characters' HP only by a certain percentage. Since thiss is the monster's lone attack, it cannot kill Tidus and Auron! So don't worry about healing your characters, just attack.
        <br/>
        Tidus and Auron start this battle with their <b>Overdrive</b> guages nearly full. The Sinspawn's first attack is usually enough to send Auron's guage over the edge. When it's Auron's turn to attack, press the left directional button to access teh Overdrive Menu. Select his Overdrive, called <b>Bushido</b>, and execute his Dragon Fang attack. When the countdown starts, quickly enter the commands displayed on-screen. If you can push the right buttons before time runs out, the attack will be executed at maximum power.The Dragon Fang should eliminate all the Sinscales in front of the boss, thus enabling you to concentrate the rest of your attacks on the Sinspawn.
        <br/>
        Tidus's Overdrive is called <b>Swordsplay</b>. When the countdown starts, a marker races across a thin meter on-screen. Press the X (PlayStaion Controller) button when the marker is directly in the center of the meter to execute the Overdrive. The strength of the attack is determined by the amount of time left on the clock.
        <br />
        After using both characters' Overdrives, keep attacking the Sinspawn, chopping off some of its tentacles each time. Auron's <b>Power Break</b> ability is useless in this fight, because the creature only attacks with magic. After destroying all of the tentacles, the battle ends.
        <br />
        This boss has no weaknesses, does not absorb any magic, has no immunities, and does not have any half damages.
      </p>
      </Paper>
    </Layout>
  );
}
