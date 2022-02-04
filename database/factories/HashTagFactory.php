<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class HashTagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $userid=User::factory()->create()->getOriginal('id');
        return [
            'weekday'=>$this->faker->dayOfWeek,
            'tags'=>$this->faker->realText,
            'status'=>$this->faker->randomDigitNotNull(),
            'user_id'=>$userid
        ];
    }
}
