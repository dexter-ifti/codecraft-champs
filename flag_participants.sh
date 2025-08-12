#!/bin/bash

# Script to flag participants for cheating
cd /home/ifti_taha/Code/Projects/codecraft-champs

echo "Flagging some participants as examples..."

# Use Node.js to update the leaderboard
node << 'EOF'
const fs = require('fs');

try {
  // Read the current leaderboard
  const leaderboard = JSON.parse(fs.readFileSync('src/data/CurrentLeaderboard.json', 'utf8'));
  
  console.log('Processing leaderboard...');
  
  // Example participants to flag (modify this list as needed)
  const participantsToFlag = [
    'ahzamanis26',
    'mdarfakshadbth',
    'dilshaddd',
    'farazr2',
    'nsaniya',
    'abdullahsidd2021',
    'humaidk',
    'mdadeem',
    'abhisheksingh137',
    'alizafatima248',
    'adarshcse',
    'aliahmad_rbl_92',
    'safiraza004',
    'as37amrit',
    'batool_amina_110',
    'mohdanas13300',
    'kkshukla',
    'mdaquib171',
    'freestreyler',
    'mohammadadi432',
    'frazhaidr',
    'asadasjad',
    'iqrazaheen25',
    'mdileepkumar578',
    'fatimaalw',
    'tausheer',
    'Anonymouse_7',
  ];
  
  let flaggedCount = 0;
  
  // Update the flagged participants
  leaderboard.models.forEach(participant => {
    if (participantsToFlag.includes(participant.hacker)) {
      participant.is_cheating = true;
      flaggedCount++;
      console.log(`✅ Flagged: ${participant.hacker} (ID: ${participant.hacker_id})`);
    }
  });
  
  // Write back to file
  fs.writeFileSync('src/data/CurrentLeaderboard.json', JSON.stringify(leaderboard, null, 2));
  
  const cleanCount = leaderboard.models.filter(p => !p.is_cheating).length;
  const totalFlagged = leaderboard.models.filter(p => p.is_cheating).length;
  
  console.log(`\n🚩 Participants flagged in this run: ${flaggedCount}`);
  console.log(`📊 Clean participants: ${cleanCount}`);
  console.log(`🔍 Total flagged participants: ${totalFlagged}`);
  console.log(`📈 Total participants: ${leaderboard.total}`);
  console.log('\n✅ Leaderboard updated with cheating flags!');
  
} catch (error) {
  console.error('Error:', error.message);
}
EOF

echo "Script completed!"


# 'Aabuzer',
# 'dil_nawaj_alam',
# 'amnahmad121',
