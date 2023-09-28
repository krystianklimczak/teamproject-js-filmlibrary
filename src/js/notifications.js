export function addToWatchQueue() {
    Notiflix.Notify.info('The movie has been added to the queue');
  }

export function addToWatched() {
    Notiflix.Notify.info('The movie has been added to watched');
}
export function infoRemoveFromQueue() {
    Notiflix.Report.info('Removing the movie',
    'You delete a movie from the queue',
    'Okay',
    removeFromQueue);
}
    
    function removeFromQueue() {
      Notiflix.Notify.info('The movie has been removed from the queue');
    }


 export function infoRemoveFromWatched() {
        Notiflix.Report.info('Removing the movie',
        'You delete a movie from the watched',
        'Okay',
        removeFromWatched);
        }
        
        function removeFromWatched() {
          Notiflix.Notify.info('The movie has been removed from watched');
        }