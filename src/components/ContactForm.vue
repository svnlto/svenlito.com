<template>
<div>
  <form name="contact" method='post' data-netlify="true" :action="url">
    <fieldset>
      <input
          key='1'
          class='field'
          type='text'
          name='name'
          placeholder='Full Name'
          required
        />
      <input
          key='2'
          class='field'
          type='email'
          name='_replyto'
          placeholder='Email Address'
          required
        />
      <textarea
          key='3'
          class='field'
          type='message'
          name='message'
          placeholder='Message'
          required
        />
        <input
          class='button'
          type='submit'
          value='Send message'
        />
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      url: 'http://svenlito.com/thanks'
    };
  }
};
</script>

<style lang="postcss" scoped>
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: currentColor;
}

fieldset {
  border: 0;
}

textarea {
  min-height: 200px;
  max-width: 100%;
}

input,
textarea {
  -webkit-appearance: none;
  border-radius: 0;
  width: 100%;
  outline: none;
  font-family: $fontMono;
  font-size: $delta;
  background-color: transparent;
  position: relative;
  padding: 12px 16px;
  border-width: 1px;
  border-style: solid;
  margin-bottom: 8px;
  transition: 0.2s;
  color: inherit;
  opacity: 0.4;

  &:focus {
    opacity: 1;
    zindex: 1;
    transform: scale(1.01);
    background-color: $black;
  }
}

.button {
  color: $whiteDark10;
  border-color: $darkGray;
  width: auto;
  border-width: 2px;
  border-style: solid;
  padding: 8px 24px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: $white;
    border-color: $pink;
  }
}
</style>
