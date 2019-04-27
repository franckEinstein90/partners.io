* Game Description *

staring bootstrap (front), node (back) and socket.io, angular for in-between

Pardner is an asynchronous game in which several players share the game space in real 
time. Players are cycled through 3 different types of game rounds in increasing order 
of difficulty:

    Mode Survive:   1 player has to survive the round to move to next

    Mode Cooperate: 2 players share the game space and must both survive 
                    to pass the round

    Mode Fight:     4 players share the game space as teams of two. 
                    Both players from the team that has the last player(s) 
                    alive advance to the next round

in all cases in which players play within teams, they get the opportunity to continue to 
play the next rounds as a team. 
 
Players are pods built on a single symmetrical plan around which they can rotate. 
Players are equiped with:
    - 1 thrust  [0-5] 
    - 1 gun

    Player maneuver by rotating to their left or right, and by 
    activating their thrust 

** Game Space **

    Players are bound in a 2D space into which various other props enter or
    are placed

    - rocks: can damage or incapacitate players they collide with 
    - shields are hard stationary shapes that can be used as protection. Shields
    degrade from repetitve collisions 
    - dinos can also be used as shields, but are not stationary. When a player 
    and a dino collides, the player's trajectory is affected (pushed) but the 
    player is not harmed. 

    The game is built to discourage players being able to stay stationary. Threats can
    enter the game from any of its boundaries and move in any direction within it, 


  
