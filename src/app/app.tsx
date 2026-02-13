import { defineComponent, ref } from 'vue'

import { MButton } from '@murzex/mvue'

import loveis_1 from './assets/images/loveis_1.png'

import loveis_2_1 from './assets/images/loveis_2/loveis_2_1.png'
import loveis_2_2 from './assets/images/loveis_2/loveis_2_2.png'
import loveis_2_3 from './assets/images/loveis_2/loveis_2_3.png'
import loveis_2_4 from './assets/images/loveis_2/loveis_2_4.png'

import loveis_3_1 from './assets/images/loveis_3/loveis_3_1.png'
import loveis_3_2 from './assets/images/loveis_3/loveis_3_2.png'
import loveis_3_3 from './assets/images/loveis_3/loveis_3_3.png'
import loveis_3_4 from './assets/images/loveis_3/loveis_3_4.png'
import loveis_3_5 from './assets/images/loveis_3/loveis_3_5.png'

export default defineComponent(() => {
	const pages = ref<number>(0)

	const images = ref<any[]>([
		{
			text: 'это когда дом — там, где ты.',
			image: loveis_1,
		},
		{
			text: 'это чувствовать тепло, даже когда за окном зима.',
			image: loveis_2_1,
		},
		{
			text: 'это когда сердце спокойно рядом с тобой.',
			image: loveis_2_2,
		},
		{
			text: 'это выбирать друг друга каждый день.',
			image: loveis_2_3,
		},
		{
			text: 'это держать за руку и понимать без слов.',
			image: loveis_2_4,
		},
		{
			text: 'это заботиться, даже в мелочах.',
			image: loveis_3_1,
		},
		{
			text: 'это когда твоя улыбка — мой любимый рассвет.',
			image: loveis_3_2,
		},
		{
			text: 'это знать, что ты не один — никогда.',
			image: loveis_3_3,
		},
		{
			text: 'это что-то большее, чем можно объяснить.',
			image: loveis_3_4,
		},
		{
			text: 'это строить планы и видеть в них нас.',
			image: loveis_3_5,
		},
	])

	return () => (
		<>
			<div class='content'>
				<div class='header'>
					<h1 class='title'>Love is ...</h1>
					<p class='sub-title'>Любовь это - когда ...</p>
				</div>

				{pages.value !== 0 && (
					<div class='sub-content'>
						<img class={['img', pages.value === 1 && 'img-sm']} src={images.value[pages.value - 1].image} />
						<span class='text'>{images.value[pages.value - 1].text}</span>
					</div>
				)}

				<div class='footer'>
					{pages.value === 0 ? (
						<MButton value='Нажми на меня, чтобы продолжить' severity='secondary' size='large' onClick={() => (pages.value = 1)} />
					) : (
						<>
							<MButton
								value='Вернутся'
								severity='secondary'
								size='large'
								onClick={() => (pages.value === 0 ? null : (pages.value = pages.value - 1))}
							/>
							<MButton
								value='Продолжить'
								severity='secondary'
								size='large'
								onClick={() => (pages.value === 0 ? null : (pages.value = pages.value + 1))}
							/>
						</>
					)}
				</div>
			</div>
		</>
	)
})
