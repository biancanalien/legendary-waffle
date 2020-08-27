import Vue from 'vue'

export const sucessNotification = message => {
  return Vue.toast(message, {
    className: ['et-info'],
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    duration: 3000,
    mode: 'queue',
    transition: 'fade'
  });
};

export const errorNotification = message => {
  return Vue.toast(message, {
    className: ['et-alert'],
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    duration: 3000,
    mode: 'queue',
    transition: 'fade'
  });
};
