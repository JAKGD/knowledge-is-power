async function beginQuiz() {
    window.location.href="/quiz"
    const response = await fetch('/api/user/quiz', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.ok) {
      console.log("startQuiz")
    } else {
      alert('Failed to log in.'); 
    };
    
    }
    
    